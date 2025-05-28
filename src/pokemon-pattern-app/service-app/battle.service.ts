import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BattleResult } from '../pokemon/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  private resultSubject = new BehaviorSubject<BattleResult | null>(null);
  result$ = this.resultSubject.asObservable();

  sendResult(result: BattleResult) {
    this.resultSubject.next(result);
    setTimeout(() => {
      this.resultSubject.next(null);
    }, 3500);
  }
}