/**
 * <T> is a Generic Type
 * It can be any Object: String, Boolean, Number, Date, Object, null, undefined
 */
export class UnityKnowledge <T extends UnityKnowledgeType<K>, K extends UnityKnowledgeTypeBase> {
    
    // concepte que estable el coneixement
    concept: T;
    // Necessito fer un mecanisme que extregui informacio d'una imatge, per associar-la a unitat de coneixement
    // La imatge associada al concepte estable el coneixement
    image: HTMLImageElement;
    // conclusions que fa la mente humana al llarg del temps
    description: String;
    // Criteris pels que pots buscar la unitat de coneixement
    tags: String[];
    // Relacions amb altres unitats de coneixement
    relations: UnityKnowledgeType<K>[];

    // la creacio d'una unitat de coneixement es la relacio entre un concepte i una imatge
    constructor(concept: T, image: HTMLImageElement) {
        //definicio unitat de coneixement
        this.concept = concept;
        this.image = image;
        // info complementaria
        this.relations = [];
        this.tags = [];
        this.description = "";
    }

    public getValue(): String {

        return this.concept.toString();
    
    }

    public modifyDescription(description: String): void {
        
        this.description = description;

    }

    public addTag(tag: String): void {

        this.tags.push(tag);
    
    }

    public createRelation(unity: UnityKnowledgeType<K>): void {
        
        this.relations.push(unity);

        this.addTag(unity.getValue());
    
    }
}

export interface UnityKnowledgeType<K> extends UnityKnowledgeTypeBase {

    addTag(tag: String): void;

    createRelation(unity: UnityKnowledgeType<K>): void;

    modifyDescription(description: String): void;

}

export interface UnityKnowledgeTypeBase {

    getValue(): String;

}

export class UnityKnowledgeString extends UnityKnowledge<UnityKnowledgeString, UnityKnowledgeString> {

}