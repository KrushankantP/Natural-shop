import {AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {IProduct} from '../../../shared/models/IProduct';
import {Router} from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy, AfterViewInit {

  displayedColumns = ['title', 'category', 'price', 'actions'];
  fieldsToFilter = ['title', 'category', 'price'];
  dataSource: MatTableDataSource<IProduct>;
  subscription: Subscription;
  filterValue: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _productService: ProductService,
              private _router: Router) {
    this.dataSource = new MatTableDataSource<IProduct>();

  }
  ngOnInit(): void {
    this.subscription = this._productService.getAllProducts()
      .subscribe(products => (this.dataSource.data = products));
    this.dataSource.filterPredicate = this.customFilterPredicate;

  }
  ngAfterViewInit() {

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  applyFilter() {
    //this line will apply filter on all object property whether we display those property on table or not.
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }

  clearFilter() {
    this.filterValue = '';
    this.applyFilter();
  }

  // this customize filter will only filter data based on provided columns.
  // usually it will filter data based on all data(IProduct) object property. to customize we define this function.
  customFilterPredicate = (data: IProduct, filter: string) => {
    const allValues = this.fieldsToFilter.reduce(
      (text: string, field: string) =>
        (text += (data[field] + '').trim().toLowerCase()), ''
    );
    return allValues.includes(filter);
  };

  onEdit(key) {
    console.log("id", key)
    this._router.navigate(['/admin/products', key]);
  }


}
  /*-----------------------------------This is code is for NGX-dataTable-------------------------  */


  // @ViewChild('actionTemplate') actionTemplate: TemplateRef<any>;
  // products: IProduct[];
  // productColumn = [];
  // filteredProducts;
  // items;


  // updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //
  //   // filter our data
  //   this.filteredProducts  = this.items.filter(data => {
  //     return data.name.toLowerCase().indexOf(val) !== -1 || !val;
  //   });
  //
  //   // update the rows
  //   this.products = this.filteredProducts ;
  //   // Whenever the filter changes, always go back to the first page
  //   // this.myFilterTable.offset = 0;
  // }
  //
  // // filter(query: string){
  // //   this.filteredProducts = query.toLowerCase().trim();
  // //   this.products.filter(product =>
  // //     product.title.toLowerCase().includes(query.toLowerCase())
  // //   );
  // // }

  // ngOnInit(): void {
  //   this._productService.getAllProducts()
  //     .subscribe(products => {
  //       this.products = products;
  //       this.productColumn = [
  //         {prop: 'title', name: 'Title'},
  //         {prop: 'category', name: 'Category'},
  //         {prop: 'price', name: 'Price'},
  //         {prop: 'key', name: 'Actions', cellTemplate : this.actionTemplate}
  //       ];
  //       console.log("this.products", this.products)
  //     });
  // }
  //
  // // ngOnDestroy(): void {
  // //   this.subscription.unsubscribe();
  // // }
  //
  //}
