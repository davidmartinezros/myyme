import { Unity } from './unity';

export class UnityRelationWrapper {

    constructor(
      public idUser: string,
      public idRobot: string,
      public idUnity: string,
      public unityRelation: Unity
    ) {  }

}
