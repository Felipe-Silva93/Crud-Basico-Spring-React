package meu.crud.crud.controller;



import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import meu.crud.crud.service.Servicos;
import meu.crud.crud.usuario.Usuario;
import meu.crud.crud.usuarioDTO.UsuarioDTO;

@RestController
@RequestMapping("/crud")
@CrossOrigin("*")
public class CrudController {

	@Autowired
	private Servicos servicos;
	
	@GetMapping
	public ResponseEntity<List<Usuario>>pegarTodos(){
		
		return servicos.pegarAll();
	}
	
	@GetMapping("id/{id}")
	public ResponseEntity<Usuario>pegarPorId(@PathVariable Long id){
		return servicos.pegarId(id);
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario>postar(@RequestBody UsuarioDTO dto ){
		
		return servicos.postarUsuario(dto);
	}
	
	@PutMapping("/atualizar/{id}")
	public ResponseEntity<Usuario>atualizar(@PathVariable(value="id")Long id,@Valid @RequestBody Usuario usuario){
		
		return servicos.atualizarUsuario(usuario);
	}
}
