import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 5;
  images = [
    {
      title : 'Deniz Kum Güneş',
      url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Ankara',
      url:'https://images.unsplash.com/photo-1605259386010-d7003729af98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'İstanbul',
      url:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Antalya',
      url:'https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW50YWx5YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Rize',
      url:'https://images.unsplash.com/photo-1609311512950-6818754ea7dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cml6ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Hatay',
      url:'https://images.unsplash.com/photo-1630547595444-550155ef74cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },{
      title : 'Ankara',
      url:'https://images.unsplash.com/photo-1605259386010-d7003729af98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'İstanbul',
      url:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Antalya',
      url:'https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW50YWx5YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Rize',
      url:'https://images.unsplash.com/photo-1609311512950-6818754ea7dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cml6ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Hatay',
      url:'https://images.unsplash.com/photo-1630547595444-550155ef74cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },{
      title : 'Ankara',
      url:'https://images.unsplash.com/photo-1605259386010-d7003729af98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'İstanbul',
      url:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Antalya',
      url:'https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW50YWx5YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Rize',
      url:'https://images.unsplash.com/photo-1609311512950-6818754ea7dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cml6ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Hatay',
      url:'https://images.unsplash.com/photo-1630547595444-550155ef74cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },{
      title : 'Ankara',
      url:'https://images.unsplash.com/photo-1605259386010-d7003729af98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'İstanbul',
      url:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Antalya',
      url:'https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW50YWx5YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Rize',
      url:'https://images.unsplash.com/photo-1609311512950-6818754ea7dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cml6ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Hatay',
      url:'https://images.unsplash.com/photo-1630547595444-550155ef74cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },{
      title : 'Ankara',
      url:'https://images.unsplash.com/photo-1605259386010-d7003729af98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5rYXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'İstanbul',
      url:'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXN0YW5idWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Antalya',
      url:'https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YW50YWx5YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Rize',
      url:'https://images.unsplash.com/photo-1609311512950-6818754ea7dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cml6ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
      title : 'Hatay',
      url:'https://images.unsplash.com/photo-1630547595444-550155ef74cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0YXl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    }

  ]

  pageIndex(number:number){
    return Math.abs(this.currentPage - number) < 5
  }

  



}
