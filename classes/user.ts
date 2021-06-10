import Recados from './recado'
import { v4 as uuid } from "uuid";

class User {
    public id: string;
    public usuario: string;
    private senha: string;
    private recado: Array<Recados>;    

    constructor(usuario: string, senha: string) {
        this.id = uuid();
        this.usuario = usuario;
        this.senha = senha;
        this.recado = [];     
    }
    //Usuários
    exibirUsuario() {
        return {
          id: this.id,
          usuario: this.usuario,
          recado: this.recado,             
        };
    }    
    //Recados
    //Adicionar um novo recado
    adicionarRecado(descricao: string, detalhes: string) {
        this.recado.push(new Recados(descricao, detalhes));
    }
    //Deletar um recado
    deletarRecado(id: string) {        
        const indice = this.recado.findIndex(
          (f) => f.id === id
        );
        if (indice === -1) {
          return console.log('Recado não encontrada');        
          }        
        return this.recado.splice(indice, 1);
    }
    //Editar o Recado e salvar alteração
    editarRecado(id: string, descricao: string, detalhes: string) {
        const editar = this.recado.find((f) => f.id === id);      
        if (editar) {
          editar.descricao = descricao;
          editar.detalhes = detalhes;          
        }
        return editar;
    }

}
export default User;