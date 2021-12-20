import {Commentaire } from "./commentaire";
export class Plat {
    id: string;
    nom: string;
    image: string;
    categorie: string;
    special: boolean;
    label: string;
    prix: string;
    description: string;
    commentaires: Commentaire[];

}
    