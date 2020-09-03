import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  tutor: any;
  poc: any;
  session: any;
  email: any;
  card: any;
  id: any;
  forgotid: any;
  forgot: any;
  pocemail:any;
  session_online: any;
  session_from_date: any;
  homenavbar: boolean;
  pocnavbar: boolean;
  tutornavbar: boolean;
  session_to_date: any;
  session_tutorname: any;
  session_topic: any;
  constructor(private http: Http) { }
  
  sendobjecttutor(data){
    this.tutor = data;
  }
  getobjecttutor(){
    return this.tutor;
  }
  sendobjectforgot(data7){
    this.forgot = data7;
  }
  getobjectforgot(){
    return this.forgot;
  }
  sendobjectpoc(data1){
    this.poc = data1;
  }
  getobjectpoc(){
    return this.poc;
  }
  sendobjectemail(data4){
    this.email = data4;
  }
  getobjectemail(){
    return this.email;
  }
  sendobjectsession(data3){
    this.session = data3;
  }
  getobjectsession(){
    return this.session;
  }
  sendobjectcard(data5){
    this.card = data5;
  }
  getobjectcard(){
    return this.card;
  }
  sendobjectforgotId(data6){
    this.forgotid = data6;
  }
  getobjectforgotId(){
    return this.forgotid;
  }
  sendobjectsessionid(data6){
    this.id = data6;
  }
  getobjectsessionid(){
    return this.id;
  }

  saveUser_tutor(user) {
    return this.http.post('http://localhost:8080/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }
  AddtoCart(user) {
    return this.http.post('http://localhost:8083/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }
  saveUser_poc(user) {
    return this.http.post('http://localhost:8081/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }
  saveUser_session(user) {
    return this.http.post('http://localhost:8082/api/SaveUser/', user)
      .map((response: Response) => response.json());
  }
  

  GetUser_tutor() {
    return this.http.get('http://localhost:8080/api/getUser/')
      .map((response: Response) => response.json());
  }
  GetUser_poc() {
    return this.http.get('http://localhost:8081/api/getUser/')
      .map((response: Response) => response.json());
  }
  GetUser_session() {
    return this.http.get('http://localhost:8082/api/getUser/')
      .map((response: Response) => response.json());
  }
  GetUser_poccards() {
    return this.http.get('http://localhost:8083/api/getUser/')
      .map((response: Response) => response.json());
  }
  sendobjectpocemail(data8){
    this.pocemail = data8;
  }
  getobjectpocemail(){
    return this.pocemail;
  }
  UpdateUser_tutor(data) {
    return this.http.post('http://localhost:8080/api/UpdateUser/', data)
      .map((response: Response) => response.json());
  }
  UpdateUser_poc(data) {
    return this.http.post('http://localhost:8081/api/UpdateUser/', data)
      .map((response: Response) => response.json());
  }
  UpdateUser_session(data) {
    return this.http.post('http://localhost:8082/api/UpdateUser/', data)
      .map((response: Response) => response.json());
  }
  deleteUser(id) {
    return this.http.post('http://localhost:8082/api/deleteUser/', { 'id': id })
      .map((response: Response) => response.json());
  }
  sendSessionDetails(data9){
    this.session_online = data9;
  }
  getSessionDetails(){
    return this.session_online;
  }
  sendSessionfrom_date(data10){
    this.session_from_date = data10;
  }
  getSessionfrom_date(){
    return this.session_from_date;
  }
  setLoginnavbar(){
    this.homenavbar = true;
    this.pocnavbar = false;
    this.tutornavbar = false;
  }
  setTutornavbar(){
    this.homenavbar = false;
    this.pocnavbar = false;
    this.tutornavbar = true;
  }
  setPocnavbar(){
    this.homenavbar = false;
    this.pocnavbar = true;
    this.tutornavbar = false;
  }
  sendSessionto_date(data11){
    this.session_to_date = data11;
  }
  getSessionto_date(){
    return this.session_to_date;
  }
  sendSessiontutorname(data12){
    this.session_tutorname = data12;
  }
  getSessiontutorname(){
    return this.session_tutorname;
  }
  sendSessiontopic(data13){
    this.session_topic = data13;
  }
  getSessiontopic(){
    return this.session_topic;
  }

}
