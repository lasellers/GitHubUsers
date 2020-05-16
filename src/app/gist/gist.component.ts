import {Component, OnInit, OnDestroy} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {GitHubUserService} from '../git-hub-user.service';
import {Gist} from '../gist';
import {BytesPipe} from '../bytes.pipe';

@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit, OnDestroy {
  gist: any;

  constructor(
    public userService: GitHubUserService,
    public toast: ToastrService) {
  }

  ngOnInit(): void {
    console.log('ngOnInit GistComponent: ');

    this.userService.gistObserver$.subscribe(
      data => {
         console.log('Gist Event...');
         this.gistEvent(data);
       },
      error => {
        console.log('Error gist: ', error);
      }
    );
/*
    this.userService.gistObserver$.subscribe({
      next(data: Gist) {
        console.log('Gist Event...');
        this.gistEvent(data);
      },
      error(msg) {
        console.log('Error gist: ', msg);
      }
    });
 */
  }

  gistEvent(data) {
    console.log('subscribe gist$:', data.content, data.filename, data.size);
    this.gist = data.content;

    const size = new BytesPipe().transform(data.size);
    this.toast.info(`${data.filename} (${size})`, '', {
      timeOut: 2000
    });
  }

  ngOnDestroy(): void {
    this.userService.gistObserver$.unsubscribe();
  }

}
