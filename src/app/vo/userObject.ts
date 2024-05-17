import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserObject {
  private _userId = '';
  private _userName = '';
  private _isActive = false;


  constructor() { }

  set userId(val: string) { this._userId = val; }
  get userId(): string { return this._userId; }

  set userName(val: string) { this._userName = val; }
  get userName(): string { return this._userName; }

  set isActive(val: boolean) { this._isActive = val; }
  get isActive(): boolean { return this._isActive; }
}
