import { default as model } from './model/model.js';
import { default as controller } from './controller/controller.js';

(new controller.game()).start(model);

