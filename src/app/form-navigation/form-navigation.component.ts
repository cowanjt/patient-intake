import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrls: ['./form-navigation.component.scss']
})
export class FormNavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public traverseForm(direction: string) {
    switch (this.router.url) {

      // Patient Information
      case '/patient-information/basic-information':
        this.router.navigateByUrl('/patient-information/physical-address');
        break;
      case '/patient-information/physical-address':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-information/mailing-address');
        else
          this.router.navigateByUrl('/patient-information/basic-information');
        break;
      case '/patient-information/mailing-address':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-information/contact');
        else
          this.router.navigateByUrl('/patient-information/physical-address');
        break;
      case '/patient-information/contact':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-information/emergency-contact');
        else
          this.router.navigateByUrl('/patient-information/mailing-address');
        break;
      case '/patient-information/emergency-contact':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-information/emergency-contact-information');
        else
          this.router.navigateByUrl('/patient-information/contact');
        break;
      case '/patient-information/emergency-contact-information':
        if (direction === 'next')
          this.router.navigateByUrl('/account/referral');
        else
          this.router.navigateByUrl('/patient-information/emergency-contact');
        break;

      // Account
      case '/account/referral':
        if (direction === 'next')
          this.router.navigateByUrl('/account/reason-for-visit');
        else
          this.router.navigateByUrl('/patient-information/emergency-contact-information');
        break;
      case '/account/reason-for-visit':
        if (direction === 'next')
          this.router.navigateByUrl('/account/account-manager');
        else
          this.router.navigateByUrl('/account/referral');
        break;
      case '/account/account-manager':
        if (direction === 'next')
          this.router.navigateByUrl('/account/account-manager-information');
        else
          this.router.navigateByUrl('/account/reason-for-visit');
        break;
      case '/account/account-manager-information':
        if (direction === 'next')
          this.router.navigateByUrl('/account/employer');
        else
          this.router.navigateByUrl('/account/account-manager');
        break;
      case '/account/employer':
        if (direction === 'next')
          this.router.navigateByUrl('/account/payment-preferences');
        else
          this.router.navigateByUrl('/account/account-manager-information');
        break;
      case '/account/payment-preferences':
        if (direction === 'next')
          this.router.navigateByUrl('/account/terms-and-conditions');
        else
          this.router.navigateByUrl('/account/employer');
        break;
      case '/account/terms-and-conditions':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/medical/basic');
        else
          this.router.navigateByUrl('/account/payment-preferences');
        break;

      // Medical History
      case '/patient-histories/medical/basic':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/medical/allergies-and-conditions');
        else
          this.router.navigateByUrl('/account/terms-and-conditions');
        break;
      case '/patient-histories/medical/allergies-and-conditions':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/medical/safety-protocol');
        else
          this.router.navigateByUrl('/patient-histories/medical/basic');
        break;
      case '/patient-histories/medical/safety-protocol':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/dental/dentist');
        else
          this.router.navigateByUrl('/patient-histories/medical/allergies-and-conditions');
        break;

      // Dental History
      case '/patient-histories/dental/dentist':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/dental/dentist-information');
        else
          this.router.navigateByUrl('/patient-histories/medical/safety-protocol');
        break;
      case '/patient-histories/dental/dentist-information':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/dental/care');
        else
          this.router.navigateByUrl('/patient-histories/dental/dentist');
        break;
      case '/patient-histories/dental/care':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/dental/previous-treatment');
        else
          this.router.navigateByUrl('/patient-histories/dental/dentist-information');
        break;
      case '/patient-histories/dental/previous-treatment':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/dental/xray');
        else
          this.router.navigateByUrl('/patient-histories/dental/care');
        break;
      case '/patient-histories/dental/xray':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/dental/treatment-disposition');
        else
          this.router.navigateByUrl('/patient-histories/dental/previous-treatment');
        break;
      case '/patient-histories/dental/treatment-disposition':
        if (direction === 'next')
          this.router.navigateByUrl('/patient-histories/confirmation');
        else
          this.router.navigateByUrl('/patient-histories/dental/xray');
        break;

      // History Confirmation
      case '/patient-histories/confirmation':
        this.router.navigateByUrl('/patient-histories/dental/treatment-disposition');
        break;

    }
  }

}