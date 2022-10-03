import { Component, Input, OnInit } from '@angular/core';
import { PortfolioButton } from '../../models/button.interface';
import { PORTFOLIO_COLORS_CSS } from '../../models/colors.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() button!: PortfolioButton;

  buttonColor?: string = '';
  textColor?: string = '';
  constructor() {}

  ngOnInit(): void {
    if (this.button.btnColor) {
      this.buttonColor = PORTFOLIO_COLORS_CSS[this.button.btnColor];
      console.log();
    }

    if (this.button.labelColor) {
      this.textColor = PORTFOLIO_COLORS_CSS[this.button.labelColor];
      console.log();
    }
  }
}
