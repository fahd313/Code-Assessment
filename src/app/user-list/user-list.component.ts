import {Component, Inject, Input, OnInit} from '@angular/core';
import {User} from '../home-page/user';
import {MatDialog} from '@angular/material/dialog';
import {ForkServiceService} from './fork-service.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[];
  rawText = '';

  constructor(public dialog: MatDialog, private forkService: ForkServiceService) { }

  ngOnInit(): void {
  }

  getFilesDetails(user): object[] {
    const userFiles = [];
    if (user && user.files){
      for (const file in user.files){
        if (!userFiles.includes(user.files[file])){
          userFiles.push(user.files[file]);
        }
      }
    }
    return userFiles;
  }

  openDialog(textUrl): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      data: {
        textUrl
      }
    });
    dialogRef.afterClosed().subscribe( () => console.log('closed'));
  }

}


@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialogComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, private forkService: ForkServiceService
  ) {
  }

  textData: Observable<any>;

  ngOnInit(): void {
    this.textData = this.forkService.getData(this.data.textUrl);
  }

}
