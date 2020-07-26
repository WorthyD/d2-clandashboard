import { Injectable } from '@angular/core';
import { profileHashes } from '../../../../../src/assets/configs/profile-hashes.js';

/*
Eventually want to convert this into a more dynamic mode so it is easier to maintain.
*/
@Injectable({
  providedIn: 'root'
})
export class ContentHashService {
  constructor() {}


  getProfileHashes() {
    return profileHashes.allHashes;
  }
}
