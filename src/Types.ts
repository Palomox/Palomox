export type Route = {
    name: String
    label: String
    route: String
}
export type ProjectType = {
    name: String
    description: String
    image: String
    picSide: String
    link: String
}
export class ProjectClass implements ProjectType{
    description!: String;
    image!: String;
    name!: String;
    picSide!: String;
    link!: String;

}
