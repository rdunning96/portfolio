import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomOptionsModel } from '../../models/owl-options';
import { DataService } from '../../services/data.service';
import { SubSink } from 'subsink';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html'
})
export class WorkComponent implements OnInit {
  subSink = new SubSink();
  customOptions: OwlOptions = CustomOptionsModel;
  searchText: string;
  worksItems: any = [];
  totalItems: any = [];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getWorksData();
  }

  navigateTo(){
    this.router.navigate(['/view']);
  }

  items = [
    { title: 'What people say', description: 'Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing'
     + 'A small creative team, trying to enrich the lives of others', author:'Brian Rood' },
     { title: 'What people say', description: 'Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing'
     + 'A small creative team, trying to enrich the lives of others', author:'Miki Rood' },
     { title: 'What people say', description: 'Fusce risus metus, placerat in consectetur eu, porttitor a est sed sed dolor lorem cras adipiscing'
     + 'A small creative team, trying to enrich the lives of others', author:'Robert Rood' },
  ]

  getWorksData(){
    this.subSink.add(this.dataService.getMetaData()
      .subscribe(
         data => {
          if(data){
            this.worksItems = this.totalItems = data;
            console.log("DATA", this.worksItems)
          }
      }
      ))
    }
    
    filterItems(category) {
      if(category == 'all'){
        this.worksItems = this.totalItems;
      }
      else{
        this.worksItems = this.totalItems.filter(work => work.category === category);
      }
    }
    /*filterItems(category) {
      if(category == 'all'){
        this.worksItems = this.totalItems;
      }
      else{
        this.worksItems = [];
        console.log("filter", this.totalItems);
        this.worksItems = this.totalItems.filter(work => work.category == category);
        
      }
    }*/

    ngOnDestroy(): void {
      this.subSink.unsubscribe();
    }
}
