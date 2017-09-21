import { Injectable } from '@angular/core';

@Injectable()
export class SaleService {
  toSale;

  destroy(): void {
    this.toSale = null;
  }
}