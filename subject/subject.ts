import './subject.css';

import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
// subject与observable
//region
//多播与单播
const obserbable = new Observable(observer => {
  observer.next(Math.random());
});

obserbable.subscribe((data) => {
  // console.log(data);
});

obserbable.subscribe((data) => {
  // console.log(data);
})

const subject = new Subject();
subject.subscribe(subject => {
  // console.log(subject);
})

subject.subscribe(subject => {
  // console.log(subject);
})

subject.next(Math.random());

//生产者与消费者
const obserbable2 = new Observable(observer => {
   observer.next(Math.random())
});
const subject2 = new Subject();
subject2.subscribe(data => {
  // console.log(data);
})
subject2.subscribe(data => {
  // console.log(data);
})
obserbable2.subscribe(subject2);
//endregion

//BehaviorSubject
//拿最新的值给订阅者
//实例化时需要初始值
//region
const subjectBehavior = new BehaviorSubject(0)  

subjectBehavior.subscribe(data => {
  //  console.log('subscriber A',data);
});

subjectBehavior.next(123);

subjectBehavior.subscribe(data => {
  // console.log('subscribe B',data);
});

subjectBehavior.next(321);

// console.log(subjectBehavior.value);
//endregion

//ReplaySubject
//存储一些旧数据重播给新的订阅者,可以指定要最后的多少次数据
//region
const replaySubject = new ReplaySubject(3);
replaySubject.next(1);

replaySubject.subscribe(data => {
  console.log('subscribr A', data)
});

replaySubject.next(2);
replaySubject.next(3);
replaySubject.next(4);
replaySubject.next(5);

replaySubject.subscribe(data => {
  console.log('subscribe B', data)
})
//endregion

//AsyncSubject
//region

//endregion