import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @ViewChild('navButtons', { static: true }) public navButtons: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.navButtons);
    
  }

  clearActive() : void {
    for (let button of this.navButtons?.nativeElement.children) {
      button.classList.remove("active");
    }
  }
  setActive(child: number) : void {
    let button = this.navButtons?.nativeElement.children[child];
    console.log(button);
    if(!button.classList.contains("active")) {
      this.clearActive();
      button.classList.add("active");
    }
    
  }

}
