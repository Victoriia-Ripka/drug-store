import { Component } from '@angular/core';

const categoriesList = [
  'Anti Acidity',
  'Anti Allergic And Asthma',
  'Anti Depressant',
  'Anti Diabetic',
  'Anti Fungus',
  'Anti Herpes',
  'Anti Viral',
  'Antibiotics Blood Pressure',
  'Cholesterol',
  'Erectile Dysfunction',
  'Gastrointestinal',
  'General Health',
  'Hair Loss Healthy Bones',
  'Heart Disease',
  'Herbal Men\'s Health',
  'Other',
  'Pain Relief',
  'Skin Care',
  'Sleep Aid',
  'Stop Smoking',
  'Weight Loss',
  'Women\'s Health'
]

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  categories = categoriesList
}
