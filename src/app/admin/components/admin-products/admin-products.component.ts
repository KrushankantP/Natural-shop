import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProductService} from '../../../shared/services/product.service';
import {IProduct} from '../../../shared/models/IProduct';
import {Router} from "@angular/router";


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  @ViewChild('actionTemplate') actionTemplate: TemplateRef<any>;
  products: IProduct[];
  productColumn = [];
  filteredProducts;
  items;


  constructor(private _productService: ProductService,
              private _router: Router ) {

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    this.filteredProducts  = this.items.filter(data => {
      return data.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.products = this.filteredProducts ;
    // Whenever the filter changes, always go back to the first page
    // this.myFilterTable.offset = 0;
  }

  // filter(query: string){
  //   this.filteredProducts = query.toLowerCase().trim();
  //   this.products.filter(product =>
  //     product.title.toLowerCase().includes(query.toLowerCase())
  //   );
  // }
  ngOnInit(): void {
    this._productService.getAllProducts()
      .subscribe(products => {
        this.products = products;
        this.productColumn = [
          {prop: 'title', name: 'Title'},
          {prop: 'category', name: 'Category'},
          {prop: 'price', name: 'Price'},
          {prop: 'key', name: 'Actions', cellTemplate : this.actionTemplate}
        ];
        console.log("this.products", this.products)
      });
  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

  onEdit(id) {
    console.log("id", id)
    this._router.navigate(['/admin/products', id]);
  }
}
