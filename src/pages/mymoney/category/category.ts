import { Component } from '@angular/core';

import { NavController, ModalController, NavParams } from 'ionic-angular';

// app pages
import { PickCategoryTypePage } from '../../mypicklists/pickcategorytype/pickcategorytype';
import { PickCategoryParentPage } from '../../mypicklists/pickcategoryparent/pickcategoryparent';

// services
import { UserData } from '../../../providers/user-data';

@Component({
  templateUrl: 'category.html'
})

export class CategoryPage {

  title: string;
  listheader: string;
  category: any;

  constructor(
      public nav: NavController,
      public modalController: ModalController,
      public navParams: NavParams,
      public userData: UserData) {
    
    this.category = this.navParams.data.paramCategory;
    this.category.categoryparentdisplay = this.category.categoryparent;

    if (this.category.mode === 'New') {
      this.title = 'Create Category';
      this.listheader = 'Enter Category Details';
    } else {
      this.title = 'Edit Category';
      this.listheader = 'Edit Category Details';
    }
    
  }

  save() {
    
    // Handle category sort
    if (this.category.categoryparent === '') {
      this.category.categorysort = this.category.categoryname.toUpperCase();
    } else {
      this.category.categorysort = this.category.categoryparent.toUpperCase() + ':' + this.category.categoryname.toUpperCase(); 
    }

    // Handle special case when category parent is removed
    if (this.category.categoryparentdisplay === '') {
      this.category.categoryparent = '';
    }

    // Is this a new category? 
    if (this.category.mode === 'New') {
      this.userData.addCategory(this.category);
    } else {
      this.userData.updateCategory(this.category);
    }
    this.nav.pop();
  }

  pickCategoryType() {
    let modal = this.modalController.create(PickCategoryTypePage, {paramCategoryType: this.category.categorytype});
    modal.present(modal);
    modal.onDidDismiss((data: any[]) => {
      if (data) {
        this.onPickCategoryType(data);
      }
    });
  }

  onPickCategoryType(item) {
    this.category.categorytype = item.text;
  }

  pickCategoryParent() {
    let modal = this.modalController.create(PickCategoryParentPage, {paramCategory: this.category});
    modal.present(modal);
    modal.onDidDismiss((data: any[]) => {
      if (data) {
        this.onPickCategoryParent(data);
      }
    });
  }

  onPickCategoryParent(item) {
    if (item.categoryname === '< None >') {
      this.category.categoryparentdisplay = '';
    } else {
      this.category.categoryparentdisplay = item.categoryname;
      this.category.categoryparent = item.categoryname;
    }
  }
  
}