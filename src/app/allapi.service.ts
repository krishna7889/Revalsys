import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AllapiService {

 constructor(private http:HttpClient, private to:ToastrService) { }

getdata(){
  return this.http.get('/assets/sampleData.json');
}
toster(message:string, title:string) {
  this.to.success(message, title);
}
public showError(message:any,title:any){
  this.to.error(message, title)
}

public nospace(event: any):any{
  if (event.which === 32 && event.target.selectionStart === 0) {
    return false;
  } else {
    const pattern = /^[a-zA-Z0-9]*$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
public numberOnly(event: any): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
public AlphabetsOnly(event: any) {
  const charCode = event.keyCode;
  if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 8 || charCode === 32) {
    event.target.value = event.target.value.replace(/[^A-Za-z0-9-,.;'&/.() ]|^ /g, '');
    return true;
  } else {
    return false;
  }
}

}
