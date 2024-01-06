import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [

    {
        routeLink: 'cadastros',
        icon: 'fal fa-file-alt',
        label: 'Cadastros',
        items: [
            {
            routeLink: 'cadastros/permissao',
            icon: 'fal fa-id-card',
            label: 'Cadastro de Permissões'
            },
            {
              routeLink: 'cadastros/perfil',
              icon: 'fal fa-id-card',
              label: 'Cadastro de Perfis'
            },

            {
                routeLink: 'cadastros/condutores',
                icon: 'fal fa-id-card',
                label: 'Cadastro de Condutores'
            },
            {
                routeLink: 'cadastros/emailDanfe',
                icon: 'far fa-at',
                label: 'Cadastro de E-mail Danfe'
            },
            {
                routeLink: 'cadastros/veiculos',
                icon: 'fal fa-truck',
                label: 'Cadastro de Veículos'
            }
        ]
    },
    {
        routeLink: 'mdfe',
        icon: 'fal fa-file-alt',
        label: 'MDF-e',
        items: [
            {
              routeLink: 'mdfe/gerar-mdfe',
              icon: 'fal fa-file',
              label: 'Gerar MDF-e'
            },
            {
              routeLink: 'mdfe/painel-mdfe',
              icon: 'fal fa-line-columns',
              label: 'Painel MDF-e'
            }
        ]
    },
    {
      routeLink: 'nfe',
      icon: 'fal fa-file-alt',
      label: 'NF-e',
      items: [
          {
            routeLink: 'nfe/atualizar-nfe-transferencia-onofre',
            icon: 'fal fa-file',
            label: 'Atualizar NF-e Transferencia Onofre'
          },
          {
            routeLink: 'nfe/enviar-arquivo-xml',
            icon: 'fal fa-file',
            label: 'Enviar Arquivo XML'
          },
          {
            routeLink: 'nfe/enviar-danfe-verde',
            icon: 'fal fa-file',
            label: 'Enviar Danfe Verde'
          },
          {
            routeLink: 'nfe/escanear-rg-produto',
            icon: 'fal fa-file',
            label: 'Escanear RG Produto'
          },
          {
            routeLink: 'nfe/gerar-nf-transferencia-impropio',
            icon: 'fal fa-file',
            label: 'Gerar NF Transferência Imprópio'
          },
          {
            routeLink: 'nfe/gerar-nfe',
            icon: 'fal fa-file',
            label: 'Gerar NF-e'
          },
          {
            routeLink: 'nfe/gerar-nfe-manual',
            icon: 'fal fa-file',
            label: 'Gerar NF-e Manual'
          },
          {
            routeLink: 'nfe/monitoramento-rotas',
            icon: 'fal fa-file',
            label: 'Monitoramento Rotas'
          },
          {
            routeLink: 'nfe/nfe-transferencia-onofre',
            icon: 'fal fa-file',
            label: 'NF-e Transferencia Onofre'
          },
          {
            routeLink: 'nfe/painel-nfe',
            icon: 'fal fa-file',
            label: 'Painel NF-e'
          },
      ]
    },
    {
      routeLink: 'painelNfeManual',
      icon: 'fal fa-file-alt',
      label: 'Painel NF-e Manual',
      items: [
          {
            routeLink: 'painelNfeManual/painel-nfe-manual',
            icon: 'fal fa-file',
            label: 'Painel NF-e Manual'
          },
      ]
    } ,
    {
      routeLink: 'relatorio',
      icon: 'fal fa-file-alt',
      label: 'Relatório',
      items: [
          {
            routeLink: 'relatorio/conciliacao-nfe',
            icon: 'fal fa-file',
            label: 'Conciliação NF-e'
          },
          {
            routeLink: 'relatorio/radar-producao',
            icon: 'fal fa-file',
            label: 'Radar Produção'
          }
      ]
    },
    {
      routeLink: 'roteirizacao',
      icon: 'fal fa-file-alt',
      label: 'Roteirização',
      items: [
          {
            routeLink: 'roteirizacao/gerar-roteirizacao',
            icon: 'fal fa-file',
            label: 'Gerar Roteirização'
          },
      ]
    } ,
    {
      routeLink: 'sistema',
      icon: 'fal fa-file-alt',
      label: 'Sistema',
      items: [
          {
            routeLink: 'sistema/cadastrar-parametro-sistema',
            icon: 'fal fa-file',
            label: 'Cadastrar Parametro Sistema'
          },
      ]
    } ,

];
