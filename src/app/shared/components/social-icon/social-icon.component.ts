import { Component, Input, OnInit } from '@angular/core';
import { SocialIcon } from '../../models/social-icon.interface';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss'],
})
export class SocialIconComponent implements OnInit {
  @Input() socialIcon!: SocialIcon;

  constructor() {}

  ngOnInit(): void {}
}
