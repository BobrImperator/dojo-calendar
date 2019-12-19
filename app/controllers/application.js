import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @action
  logMe() {
    console.log("Logged on did insert")
  }
}
