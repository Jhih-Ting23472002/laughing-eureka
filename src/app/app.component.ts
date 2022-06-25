import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map, Observable, observable, Subject, from, filter, of, tap, fromEvent, interval, switchMap, take,mergeMap, timer } from 'rxjs';


export interface GetMySalaryAccounts {
  BankId: string;
  BranchId: string;
  CorporateId: string;
  AccountCorpId: string;
  AccountId: string;
  AllowType: string;
  AccountKind: string;
  SalaryMark: string;
  Status: string;
  AccountName: string;
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rxjs';


  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    //傳統function
    // const func= function showName(name:string) {
    //   console.log(`My name is ${name}`);
    // }
    // func("Alan")

    //箭頭函式
    // const func2= (name:string)=> {
    //   console.log(`My name is ${name}`);
    // }
    // func2("Alan")

    // const pi=3.14159
    // const col =(val:number)=> val * pi
    // const res =col(10)
    // console.log(res)

    //使用Promise處理非同步
    // const p = () => new Promise<object>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ name: 'peter' })
    //   }, 500)

    // })
    // const p2 = () => new Promise<object>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ age: 22 })
    //   }, 1000)

    // })

    // Promise.all([p(), p2()]).then((result) => {
    // const res =Object.assign(result[0],result[1])
    // console.log(res)
    // }).catch((err) => {

    // })


    //Async / Await
    // const getUser = async() =>{
    //   const api1 =await p();
    //   const api2 =await p2();

    //   const result= Object.assign(api1,api2)
    //   console.log(result)

    // }
    // getUser()

    //rxjs
    //   let obs =Observable.create(function(observer: { next: any; }) {
    //     observer.next('hello');
    //     observer.next('Peter');

    //     setTimeout(() => {
    //       observer.next('RxJS Async Result!');
    //    }, 500);

    //   })

    //   obs.subscribe(function(value: any) {
    //     console.log(value);
    // })


    // const url = 'https://api.npoint.io/d689a1e9623fbc7eaeb6';
    // this.http.get(url).subscribe(data => {
    //   console.log(data)
    // })

    //可重複使用的方程式
    // let url = 'https://api.npoint.io/d689a1e9623fbc7eaeb6';

    // let getDataAPI = (): Observable<GetMySalaryAccounts> => {
    //   return this.http.get<GetMySalaryAccounts>(url)
    // }

    // getDataAPI().subscribe(data => {
    //   console.log(data)
    // })

    // const subjectRes = new Subject<any>();
    //沒有呼叫
    // subjectRes.subscribe((rs) => {
    //   console.log(rs);
    // });

    // subjectRes.subscribe((rs) => {
    //   console.log(`廣播 ${rs}`);
    // });
    //呼叫後傳入值
    // subjectRes.next('hell')
    // subjectRes.next('ooo')

    //map
    // const source = from([1,2,3,4,5])
    // const example = source.pipe(map(val=> val+10))
    // const res=example.subscribe(val=>console.log(val))

    //filter過濾奇數
    // const source = from([1, 2, 3, 4, 5])
    // const example = source.pipe(filter(num => num % 2 === 0))
    // const subscribe = example.subscribe(val => console.log(`Even number: ${val}`))

    //tap
    // const source = of(1, 2, 3, 4, 5)
    // const example = source.pipe(
    //   tap(val => console.log(`BEFORE MAP: ${val}`)),
    //   map(val => val + 10),
    //   tap(val => console.log(`AFTER MAP: ${val}`))
    //   )
    //   const subscribe = example.subscribe(data =>console.log(data))


    //switchMap 會依據觸發時重新顯示
    // let click$ = fromEvent(document, 'click')
    // click$.pipe(
    //   switchMap(e => interval(1000).pipe(take(4)))
    // ).subscribe(x => console.log(x))

    //mergeMap
    // let click$ = fromEvent(document, 'click');
    // click$.pipe(
    //   mergeMap(e => interval(1000).pipe(take(4)))
    // ).subscribe(x => console.log(x));

  }





}
