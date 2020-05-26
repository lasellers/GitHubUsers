import { Component, OnInit, OnDestroy } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';
import { Gist } from '../gist.model';
// import { BytesPipe } from '../bytes.pipe';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit, OnDestroy {
  gist: Gist;

  constructor(
    public userService: GitHubUserService
  ) {
  }

  ngOnInit(): void {
    this.gist = Gist.constructor(); // this.userService.blankGist();
    this.userService.gist$.subscribe(
      data => {
        this.gist = data as any;
        // this.gistEvent(data);
      },
      error => {
        this.userService.errorMessage$.emit(error);
      }
    );
  }

  // gistEvent(data): void {
  //  this.gist = data;
  // }

  ngOnDestroy(): void {
    this.userService.gist$.unsubscribe();
  }

}
