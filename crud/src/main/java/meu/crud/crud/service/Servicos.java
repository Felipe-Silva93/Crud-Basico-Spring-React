package meu.crud.crud.service;

import java.util.List;
import java.util.Optional;

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
	
	public ResponseEntity<Usuario>pegarId(Long id){
		return crudrepository.findById(id)
				.map(idExiste-> ResponseEntity.status(200).body(idExiste)).orElse(ResponseEntity.status(404).build());
	}
	
	public ResponseEntity<Usuario>postarUsuario(Usuario novoemail){
		Optional<Usuario>usuarioExiste = crudrepository.findByEmail(novoemail.getEmail());
		
		if(usuarioExiste.isPresent()) {
			return ResponseEntity.status(406).build();
		}else {
			return ResponseEntity.ok(crudrepository.save(novoemail));
		}
	}
	
	public ResponseEntity<Usuario>atualizarUsuario(Usuario usuarioAtualizar){
		return crudrepository.findByEmail(usuarioAtualizar.getEmail())
				.map(usuarioExistente->{
					usuarioExistente.setNome(usuarioAtualizar.getNome());
					usuarioExistente.setSenha(usuarioAtualizar.getSenha());
					return ResponseEntity.status(201).body(crudrepository.save(usuarioAtualizar));
					
				}).orElse(ResponseEntity.status(401).build());
	}
	
	
	

}
