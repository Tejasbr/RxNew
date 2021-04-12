import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NbDateService } from '@nebular/theme';
import { SmartTableData } from 'app/@core/data/smart-table';
import { enumValues } from 'environments/configuration';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-rule-definition',
  templateUrl: './rule-definition.component.html',
  styleUrls: ['./rule-definition.component.scss']
})
export class RuleDefinitionComponent implements OnInit {

  ruleDefinitionForm: any;

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      srNo: {
        title: 'Sr. No.',
        type: 'number',
      },
      membershipName: {
        title: 'Membership Name',
        type: 'string',
      },
      ruleName: {
        title: 'Rule Name',
        type: 'string',
      },
      ruleStatus: {
        title: 'Rule Status',
        type: 'string',
      },
      ruleStartDate: {
        title: 'Rule Start Date',
        type: 'date',
      },
      ruleEndDate: {
        title: 'Rule End Date',
        type: 'date',
      },
      pointsAccumulationStart: {
        title: 'Points Accumulation Start',
        type: 'string',
      },
      pointsAccumulationPerTransaction: {
        pointsAccumulationPerTransactionAmount: {
          title: 'Amount(£)',
          type: 'number',
        },
        pointsAccumulationPerTransactionPoints: {
          title: 'Points',
          type: 'number',
        }
      },
      pointsRedemption: {
        pointsRedemptionPoints: {
          title: 'Points',
          type: 'number',
        },
        pointsRedemptionAmount: {
          title: 'Amount(£)',
          type: 'number',
        }
      },
    },
  };
  minDate: any;
  source: LocalDataSource = new LocalDataSource();

  membershipOptions: any = Object.values(enumValues.membershipOptions);
  pointsAccumulationStarts: any = Object.values(enumValues.pointsAccumulationStarts);

  constructor(
    public service: SmartTableData,
    public dateService: NbDateService<Date>,
    public FormBuilder: FormBuilder,
  ) {
    const data = this.service.getData();
    this.source.load(data);
    console.log(this.source);
  }

  ngOnInit(): void {

    this.ruleDefinitionForm = this.FormBuilder.group({
      membershipType: ['', Validators.compose([Validators.required])],
      ruleName: ['', Validators.compose([Validators.required])],
      formpicker: ['', Validators.compose([Validators.required])],
      topicker: ['', Validators.compose([Validators.required])],
      pointAccuStars: ['', Validators.compose([Validators.required])],
      accuAmount: ['', Validators.compose([Validators.required])],
      accuPoints: ['', Validators.compose([Validators.required])],
      redemptionPoints: ['', Validators.compose([Validators.required])],
      redemptionAmount: ['', Validators.compose([Validators.required])],
      ruleActive: ['', Validators.compose([Validators.required])],
    });

  }

  // Selection Clear function
  clearSelection() {
    this.ruleDefinitionForm.reset();
  }

  getStartDate(ev) {
    console.log(ev);
    this.minDate = this.dateService.addDay(ev, 1); // minDate is selected start date, which use to set the to date 1 day after start date.
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
