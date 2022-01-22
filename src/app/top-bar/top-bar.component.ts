import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @ViewChild('navButtons', { static: false }) public navButtons: ElementRef | undefined;
  @ViewChild('topBar', { static: true }) public topBar: ElementRef | undefined;
  constructor() { }
  activeNum: number = 0;
  menuVisible: boolean = false;
  systemTime: Date = new Date();
  navigator: Navigator = window.navigator;

  ngOnInit(): void {
    //console.log(this.navButtons);
    
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
      this.activeNum = child;
      this.clearActive();
      button.classList.add("active");
    }
    
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

}
