import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListProductComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns = ['id', 'name', 'actions'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(
      (data) => {
        this.dataSource = data;
        console.log('Productos cargados:', data);
      },
      (error) => {
        console.error('Error al cargar productos:', error);
      }
    );
  }

  openEdit(element: any) {
    console.log('Editar:', element);
  }

  openDelete(element: any) {
    console.log('Eliminar:', element);
  }
}