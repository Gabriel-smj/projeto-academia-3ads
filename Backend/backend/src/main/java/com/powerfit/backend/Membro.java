package com.powerfit.backend;

import java.time.LocalDate;

public class Membro {

        private Integer id;
        private String nome;
        private LocalDate dataNascimento;
        private String email;
        private String telefone;
        private String plano;

        public Membro() {
        }

        public Membro(Integer id, String nome, LocalDate dataNascimento, String email, String telefone, String plano) {
            this.id = id;
            this.nome = nome;
            this.dataNascimento = dataNascimento;
            this.email = email;
            this.telefone = telefone;
            this.plano = plano;
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getNome() {
            return nome;
        }

        public void setNome(String nome) {
            this.nome = nome;
        }

        public LocalDate getDataNascimento() {
            return dataNascimento;
        }

        public void setDataNascimento(LocalDate dataNascimento) {
            this.dataNascimento = dataNascimento;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getTelefone() {
            return telefone;
        }

        public void setTelefone(String telefone) {
            this.telefone = telefone;
        }

        public String getPlano() {
            return plano;
        }

        public void setPlano(String plano) {
            this.plano = plano;
        }



}
