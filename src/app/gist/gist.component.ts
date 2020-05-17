import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GitHubUserService } from '../git-hub-user.service';
import { Gist } from '../gist';
// import { BytesPipe } from '../bytes.pipe';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit, OnDestroy {
  content: string;
  gist: Gist;

  constructor(
    public userService: GitHubUserService,
    public toast: ToastrService) {
  }

  ngOnInit(): void {
    this.gist = this.userService.blankGist();
    this.userService.gistObserver$.subscribe(
      data => {
        this.gistEvent(data);
      },
      error => {
        console.log('Error gist: ', error);
      }
    );
  }

  gistEvent(data) {
    this.gist = data;
    this.content = data.content;
    /*const size = new BytesPipe().transform(data.size);
    this.toast.info(`${data.filename} (${size})`, '', {
      timeOut: 2000
    });*/
  }

  ngOnDestroy(): void {
    this.userService.gistObserver$.unsubscribe();
  }

}
