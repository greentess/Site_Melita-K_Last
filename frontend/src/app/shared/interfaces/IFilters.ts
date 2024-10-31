export interface filters {
  dlina_ob:Array<number>;
  dlina_kl:Array<number>;
  /* shirina_kl:Array<number>; */
  tolchina:Array<number>;

  chrome:boolean;
  camou:boolean;
  anti:boolean;

  koza:boolean;
  rezina:boolean;
  derevo:boolean;
  mikarta:boolean;
  polipropilen:boolean;
  metal:boolean;

  naturkoza:boolean;
  plastic:boolean;
  kordura:boolean;
}

export const defaults_filters: Pick<filters,'dlina_ob' | 'dlina_kl'/* |'shirina_kl'  */| 'tolchina'|'chrome' | 'camou'|'anti' | 'koza'|'rezina' | 'derevo'|'mikarta' |'metal' | 'polipropilen'| 'naturkoza'|'plastic' | 'kordura' > = {
  dlina_ob:[100,500],
  dlina_kl:[50,300],
/*   shirina_kl:[0,100], */
  tolchina:[1,6],

  chrome:false,
  camou:false,
  anti:false,

  koza:false,
  rezina:false,
  derevo:false,
  mikarta:false,
  polipropilen:false,
  metal:false,
  naturkoza:false,
  plastic:false,
  kordura:false
}
