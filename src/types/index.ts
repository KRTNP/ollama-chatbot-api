export interface OllamaModel {
   name: string;
   modified_at: Date;
   size: number;
 }
 
 export interface OllamaModelDetail {
   license: string;
   modelfile: string;
   parameters: string;
   template: string;
   system: string;
 }
 
 export interface OllamaResponse {
   model: string;
   created_at: string;
   response: string;
   done: boolean;
 }