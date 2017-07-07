import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { CapReqCalculator, Supervisory } from '@toddpa/shared-module';

@Component({
  selector: 'supervisory-form',
  templateUrl: './supervisory.form.component.html'
})
export class SupervisoryFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Output('capReq') capReq: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const supervisory = new Supervisory()
    const K: number = form.value.sf_K / 100;
    const L: number = form.value.sf_L / 100;
    const detach: number = form.value.sf_detach / 100;
    const N: number = form.value.sf_N;
    const lgd: number = form.value.sf_lgd / 100;
    const tau: number = 1000; // form.value.sf_tau;
    const omega: number = 20; // form.value.sf_omega;
    this.capReq = supervisory.calc(K, L, detach, N, lgd, tau, omega);
    console.log(`Risk Weight  ${this.capReq}`);
  }
}
