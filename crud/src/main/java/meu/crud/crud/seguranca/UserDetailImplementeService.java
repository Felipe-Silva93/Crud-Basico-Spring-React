package meu.crud.crud.seguranca;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import meu.crud.crud.repository.CrudRepository;
import meu.crud.crud.usuario.Usuario;


//pegar as imformaçoes do bando a trabalhar com as mesmas nessa classe

@Service
public class UserDetailImplementeService implements UserDetailsService {

	@Autowired
	private CrudRepository repository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Optional<Usuario>usuarioExistente = repository.findByEmail(username);
		
		if(usuarioExistente.isPresent()) {
			return new UserDetailImplemente(usuarioExistente.get());
		}
		else {
			throw new UsernameNotFoundException(username + " não encontrado");
		}
		
	}

}
