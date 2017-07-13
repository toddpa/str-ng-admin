import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { DecimalPipe, PercentPipe } from '@angular/common';
import { Response } from '@angular/http';
import { Supervisory, SupervisoryArgs } from '@toddpa/shared-module';
import { NgForm } from '@angular/forms';
import { FormulaService } from '../../formulae.service';
import { Formula, Percentage, FormulaArgument } from '../../formulae.model';

@Component({
  selector: 'supervisory-form',
  templateUrl: './supervisory.form.component.html'
})
export class SupervisoryFormComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  @Output('capReq') capReq: number;
  selected = false;

  constructor(private formulaService: FormulaService) { }

  ngOnInit() {
    this.formulaService.init();
  }

  onSubmit(form: NgForm) {
    // TODO: Need to implement validation on the formula fields
    if (this.selected) {
      const args: any = this.formulaService.getFormula().binding(form);

      this.formulaService.execute('supervisory', args).subscribe(
        (response: Response) => {
          const obj: any = response;
          if (!Number.isNaN(obj.rw)) {
            this.capReq = obj.rw;
            console.log(`Risk Weight  ${this.capReq}`);
          } else {
            this.capReq = -1;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  formulaSelected(formula: Formula) {
    this.formulaService.setFormula(formula);
    this.selected = true;
  }

  onClear() {
    this.form.resetForm();
  }
}
