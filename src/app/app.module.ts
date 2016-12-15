import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';

// app pages
import { AboutPage, PopoverPage } from '../pages/about/about';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { LoginPage } from '../pages/login/login';
import { LoginAutoPage } from '../pages/loginauto/loginauto';
import { LogoutPage } from '../pages/logout/logout';

// myinfo
import { ChangeEmailPage } from '../pages/myinfo/changeemail/changeemail';
import { ChangeNamePage } from '../pages/myinfo/changename/changename';
import { ChangePasswordPage } from '../pages/myinfo/changepassword/changepassword';
import { PersonalProfilePage } from '../pages/myinfo/personalprofile/personalprofile';
import { PersonalProfilePhotoPage } from '../pages/myinfo/personalprofilephoto/personalprofilephoto';

// mymoney
import { AccountPage } from '../pages/mymoney/account/account';
import { AccountListPage } from '../pages/mymoney/account-list/account-list';
import { BudgetListPage } from '../pages/mymoney/budget-list/budget-list';
import { CategoryPage } from '../pages/mymoney/category/category';
import { CategoryListPage } from '../pages/mymoney/category-list/category-list';
import { PayeeListPage } from '../pages/mymoney/payee-list/payee-list';
import { PayeePage } from '../pages/mymoney/payee/payee';
import { RecurringListPage } from '../pages/mymoney/recurring-list/recurring-list';
import { ReportListPage } from '../pages/mymoney/report-list/report-list';
import { TransactionsPage } from '../pages/mymoney/transaction-list/transaction-list';
import { TransactionsVirtualPage } from '../pages/mymoney/transaction-list-virtual/transaction-list-virtual';
import { TransactionsReorderPage } from '../pages/mymoney/transaction-list-reorder/transaction-list-reorder';
import { TransactionPage } from '../pages/mymoney/transaction/transaction';

// mypicklists
import { PickDefaultBalancePage } from '../pages/mypicklists/pickdefaultbalance/pickdefaultbalance';
import { PickDefaultDatePage } from '../pages/mypicklists/pickdefaultdate/pickdefaultdate';
import { PickAccountTypePage } from '../pages/mypicklists/pickaccounttype/pickaccounttype';
import { PickAccountNamePage } from '../pages/mypicklists/pickaccountname/pickaccountname';
import { PickCategoryTypePage } from '../pages/mypicklists/pickcategorytype/pickcategorytype';
import { PickCategoryParentPage } from '../pages/mypicklists/pickcategoryparent/pickcategoryparent';
import { PickTransactionTypePage } from '../pages/mypicklists/picktransactiontype/picktransactiontype';
import { PickPayeePage } from '../pages/mypicklists/pickpayee/pickpayee';
import { PickCategoryPage } from '../pages/mypicklists/pickcategory/pickcategory';
import { PickAmountPage } from '../pages/mypicklists/pickamount/pickamount';
import { PickNotesPage } from '../pages/mypicklists/picknotes/picknotes';

// mysettings
import { AccountTypesPage } from '../pages/mysettings/accounttypes/accounttypes';
import { AccountTypesEditPage } from '../pages/mysettings/accounttypesedit/accounttypesedit';
import { SettingsPage } from '../pages/mysettings/settings/settings';

import { SignupPage } from '../pages/signup/signup';
import { TutorialPage } from '../pages/tutorial/tutorial';

// services
import { UserData } from '../providers/user-data';
import { TransactionData } from '../providers/transaction-data';
import { AccountData } from '../providers/account-data';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// YOUR SETTINGS GOES HERE!
export const firebaseConfig = {
  apiKey: "AIzaSyAjiJc9cXvd3bzl-aW0wbQC6sajr6RH5hg",
  authDomain: "brilliant-inferno-1044.firebaseapp.com",
  databaseURL: "https://brilliant-inferno-1044.firebaseio.com",
  storageBucket: "brilliant-inferno-1044.appspot.com",
  messagingSenderId: "1097950001655"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    PopoverPage,
    ForgotPasswordPage,
    LoginPage,
    LoginAutoPage,
    LogoutPage,
    ChangeEmailPage,
    ChangeNamePage,
    ChangePasswordPage,
    PersonalProfilePage,
    PersonalProfilePhotoPage,
    AccountPage,
    AccountListPage,
    BudgetListPage,
    CategoryPage,
    CategoryListPage,
    PayeeListPage,
    PayeePage,
    RecurringListPage,
    ReportListPage,
    TransactionsPage,
    TransactionsVirtualPage,
    TransactionsReorderPage,
    TransactionPage,
    PickDefaultBalancePage,
    PickDefaultDatePage,
    PickAccountTypePage,
    PickAccountNamePage,
    PickCategoryTypePage,
    PickCategoryParentPage,
    PickTransactionTypePage,
    PickPayeePage,
    PickCategoryPage,
    PickAmountPage,
    PickNotesPage,
    AccountTypesPage,
    AccountTypesEditPage,
    SettingsPage,
    SignupPage,
    TutorialPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      popoverEnter: 'popover-md-pop-in',
      popoverLeave: 'popover-md-pop-out'
    }),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    PopoverPage,
    ForgotPasswordPage,
    LoginPage,
    LoginAutoPage,
    LogoutPage,
    ChangeEmailPage,
    ChangeNamePage,
    ChangePasswordPage,
    PersonalProfilePage,
    PersonalProfilePhotoPage,
    AccountPage,
    AccountListPage,
    BudgetListPage,
    CategoryPage,
    CategoryListPage,
    PayeeListPage,
    PayeePage,
    RecurringListPage,
    ReportListPage,
    TransactionsPage,
    TransactionsVirtualPage,
    TransactionsReorderPage,
    TransactionPage,
    PickDefaultBalancePage,
    PickDefaultDatePage,
    PickAccountTypePage,
    PickAccountNamePage,
    PickCategoryTypePage,
    PickCategoryParentPage,
    PickTransactionTypePage,
    PickPayeePage,
    PickCategoryPage,
    PickAmountPage,
    PickNotesPage,
    AccountTypesPage,
    AccountTypesEditPage,
    SettingsPage,
    SignupPage,
    TutorialPage
  ],
  providers: [UserData, TransactionData, AccountData, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
