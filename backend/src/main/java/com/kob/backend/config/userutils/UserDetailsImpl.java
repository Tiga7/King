package com.kob.backend.config.userutils;


import com.kob.backend.pojo.OrdinaryUser;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * @author Gan
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsImpl implements UserDetails {

    private OrdinaryUser user;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getUsername() {
        //可以理解为设置添加security用户的中的唯一标识
        return user.getId().toString();
//        return user.getUsername();
    }

    @Override
    public String getPassword() {
        //配置security 自己的账户类对应的 password 属性
        return user.getPassword();
    }

    @Override
    public boolean isAccountNonExpired() {
        //账户是否 没有超时
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        //账户是否 没有锁定
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        //密码是否 没有超时
        return true;
    }

    @Override
    public boolean isEnabled() {
        //账户是否可用
        return true;
    }
}
