import { Component, OnInit } from '@angular/core';
import dataJson from '../../assets/data.json'

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.scss']
})
export class CertificateListComponent implements OnInit {

  
  constructor() { }
  
  
  public sortedCertificateData:Array<any>= [];
  public page!:number;  
  
  ngOnInit(): void {
    this.sortedCertificateData = [...dataJson.certificates.data]
  }

  sort(colToSort:String){
    
    switch (colToSort){
      case 'id':
        this.sortedCertificateData = this.sortedCertificateData[0].id === 1 ? 
         ( this.sortedCertificateData.sort((a:any,b:any)=> a.id < b.id ?1 :-1 )
          ) : ( this.sortedCertificateData.sort((a:any,b:any)=> a.id > b.id ?1 :-1 )
          )
      break
      case 'name':
        this.sortedCertificateData = this.sortedCertificateData[0].id === 2 ? 
        ( this.sortedCertificateData.sort((a:any,b:any)=> a.name < b.name ?1 :-1 )
         ) : ( this.sortedCertificateData.sort((a:any,b:any)=> a.name > b.name ?1 :-1 )
         )
         break
      case 'date':
        this.sortedCertificateData = this.sortedCertificateData[0].id === 1 ? 
        ( this.sortedCertificateData.sort((a:any,b:any)=> a.date < b.date ?1 :-1 )
         ) : ( this.sortedCertificateData.sort((a:any,b:any)=> a.date > b.date ?1 :-1 )
         )
      break
      case 'email':
        this.sortedCertificateData = this.sortedCertificateData[0].id === 4 ? 
        ( this.sortedCertificateData.sort((a:any,b:any)=> a.email > b.email ?1 :-1 )
         ) : ( this.sortedCertificateData.sort((a:any,b:any)=> a.email < b.email ?1 :-1 )
         )
         
      break
      case 'active':
        this.sortedCertificateData = this.sortedCertificateData[0].id === 2 ? 
        ( this.sortedCertificateData.sort((a:any,b:any)=> a.active < b.active ?1 :-1 )
         ) : ( this.sortedCertificateData.sort((a:any,b:any)=> a.active > b.active ?1 :-1 )
         )
       
      break
    }
  }
  

}
