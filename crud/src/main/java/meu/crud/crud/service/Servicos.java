package meu.crud.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import meu.crud.crud.repository.CrudRepository;
import meu.crud.crud.usuario.Usuario;

@Service
public class Servicos {

	@Autowired
	private CrudRepository crudrepository;

	public ResponseEntity<List<Usuario>> pegarAll() {
		List<Usuario> listaDeUsuario = crudrepository.findAll();

		if(listaDeUsuario.isEmpty()) {
			return ResponseEntity.status(204).build();
		}else {
			return ResponseEntity.status(200).body(listaDeUsuario);
		}
	}
	
	

}
