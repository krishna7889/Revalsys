import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllapiService } from '../allapi.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  feedbackform: any;
  submitted!: boolean;
  show!: boolean;

  constructor(
    private fb: FormBuilder,
    public allser: AllapiService
  ) { }

  ngOnInit(): void {
    this.feedbackform = this.fb.group({
      first: ['', [Validators.required]],
      last: ['', [Validators.required]],
      email: ['', Validators.compose([Validators.required,
      Validators.pattern(/^([a-z]{2}[0-9a-zA-Z]{2}([-.\w]*[0-9a-zA-Z])*@([a-zA-Z][-\w]*[a-zA-Z]\.)+[a-zA-Z]{2,9})$/)])],
      phonenumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[6-9]{1}[0-9]{9}$/)]],
      message: ['', [Validators.required]],
    })
  }
  sendmsg() {
    this.submitted = true
    if (this.feedbackform.invalid) {
      return
    }
    this.show = true
    localStorage.setItem('feedback', JSON.stringify(this.feedbackform.value))

  }

}
