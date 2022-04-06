package meu.crud.crud.seguranca;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import meu.crud.crud.usuario.Usuario;

public class UserDetailImplemente implements UserDetails {

	private static final long serialVersionUID = 1L;
	
	private String email;
	private String senha;
	private List<GrantedAuthority> authorities;
	
	
	
	public UserDetailImplemente(Usuario usuario) {
		super();
		this.email = usuario.getEmail();
		this.senha = usuario.getSenha();
		
	}
	//  autorizaçoes que vai para dentro o spring e fica no mesmo guardado
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		return authorities;
	}

	@Override
	public String getPassword() {
		
		return senha;
	}

	@Override
	public String getUsername() {
		
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		// para o token não expirar vai receber o valor true
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// nunca bloquear o usuario
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// nunca expira
		return true;
	}

	@Override
	public boolean isEnabled() {
		
		return true;
	}
	
}
