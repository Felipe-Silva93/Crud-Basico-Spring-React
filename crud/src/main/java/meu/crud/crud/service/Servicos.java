package meu.crud.crud.service;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Optional;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import meu.crud.crud.repository.CrudRepository;
import meu.crud.crud.usuario.Usuario;
import meu.crud.crud.usuarioDTO.UsuarioLoginDTO;
import meu.crud.crud.usuarioDTO.UsuarioPostDTO;

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
	
	public ResponseEntity<Usuario>postarUsuario(UsuarioPostDTO dto){
		Optional<Usuario>usuarioExiste = crudrepository.findByEmail(dto.getEmail());
		
		if(usuarioExiste.isPresent()) {
			return ResponseEntity.status(406).build();
		}else {
			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
			String senhaCriptografada = encoder.encode(dto.getSenha());
			dto.setSenha(senhaCriptografada);
			return ResponseEntity.ok(crudrepository.save(dto.transformaParaObjeto()));
		}
	}
	
	public Optional<?>pegarCredenciais(UsuarioLoginDTO dadosParaLogar){
		return crudrepository.findByEmail(dadosParaLogar.getEmail())
				.map(usuarioExistente -> {
					BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
					
					if(encoder.matches(dadosParaLogar.getSenha(),usuarioExistente.getSenha())) {
						String estruturaBasic = dadosParaLogar.getEmail()+":"+dadosParaLogar.getSenha();
						byte[]autorizacaoBase64 = Base64.encodeBase64(estruturaBasic.getBytes(Charset.forName("US-ASCII")));
						String autorizacaoHeader = "Basic "+new String(autorizacaoBase64);
						
						
						dadosParaLogar.setToken(autorizacaoHeader);
						dadosParaLogar.setId(usuarioExistente.getId());
						dadosParaLogar.setNome(usuarioExistente.getNome());
						dadosParaLogar.setSenha(usuarioExistente.getSenha());
						return Optional.ofNullable(dadosParaLogar);
					}else {
						return Optional.empty();
					}
					
				
					
					
				}).orElse(Optional.empty());
		
	}
	
	public ResponseEntity<?>atualizarUsuario(Long id,Usuario usuarioAtualizar){
		
		return crudrepository.findById(id)
				.map(usuarioExistente->{
					usuarioExistente.setNome(usuarioAtualizar.getNome());
					BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
					String senhaCriptografada = encoder.encode(usuarioAtualizar.getSenha());
					usuarioExistente.setSenha(senhaCriptografada);
					return ResponseEntity.status(201).body(crudrepository.save(usuarioExistente));
					
				}).orElse(ResponseEntity.status(401).build());
	}
	
	public ResponseEntity<Object>deletar(Long id){
		
		Optional<Usuario> idExistente = crudrepository.findById(id);
		if (idExistente.isEmpty()) {
			return ResponseEntity.status(400).build();
		}else {
			crudrepository.deleteById(id);
			return ResponseEntity.status(200).build();
		}
	}
	
	
	

}
