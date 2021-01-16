import {Component, Input, OnInit} from '@angular/core';
import {Fork} from '../fork';
import {ForkServiceService} from '../fork-service.service';

@Component({
  selector: 'app-fork',
  templateUrl: './fork.component.html',
  styleUrls: ['./fork.component.css']
})
export class ForkComponent implements OnInit {

  @Input() forkUrl: string;
  forks: Fork[];
  message = 'No forks :)';
  constructor(private forkService: ForkServiceService) { }

  ngOnInit(): void {
    if (this.forkUrl){
      this.forkService.getForks(this.forkUrl).subscribe(
        data => this.forks = data
      );
    }
  }

  getLastThree(): Fork[]{
    if (this.forks && this.forks.length){
      return this.forks.length > 3 ? this.forks.slice(Math.max(this.forks.length - 3, 1)) : this.forks;
    }
  }

}
