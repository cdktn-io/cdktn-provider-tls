/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TlsProviderConfig {
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#alias TlsProvider#alias}
  */
  readonly alias?: string;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#proxy TlsProvider#proxy}
  */
  readonly proxy?: TlsProviderProxy[] | cdktn.IResolvable;
}
export interface TlsProviderProxy {
  /**
  * When `true` the provider will discover the proxy configuration from environment variables. This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#from_env TlsProvider#from_env}
  */
  readonly fromEnv?: boolean | cdktn.IResolvable;
  /**
  * Password used for Basic authentication against the Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#password TlsProvider#password}
  */
  readonly password?: string;
  /**
  * URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#url TlsProvider#url}
  */
  readonly url?: string;
  /**
  * Username (or Token) used for Basic authentication against the Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#username TlsProvider#username}
  */
  readonly username?: string;
}

export function tlsProviderProxyToTerraform(struct?: TlsProviderProxy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_env: cdktn.booleanToTerraform(struct!.fromEnv),
    password: cdktn.stringToTerraform(struct!.password),
    url: cdktn.stringToTerraform(struct!.url),
    username: cdktn.stringToTerraform(struct!.username),
  }
}


export function tlsProviderProxyToHclTerraform(struct?: TlsProviderProxy | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_env: {
      value: cdktn.booleanToHclTerraform(struct!.fromEnv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktn.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktn.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktn.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs tls}
*/
export class TlsProvider extends cdktn.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TlsProvider resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TlsProvider to import
  * @param importFromId The id of the existing TlsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TlsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "tls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs tls} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TlsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TlsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tls',
      terraformGeneratorMetadata: {
        providerName: 'tls',
        providerVersion: '4.2.1',
        providerVersionConstraint: '~> 4.0'
      },
      terraformProviderSource: 'hashicorp/tls'
    });
    this._alias = config.alias;
    this._proxy = config.proxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: TlsProviderProxy[] | cdktn.IResolvable; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: TlsProviderProxy[] | cdktn.IResolvable | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktn.stringToTerraform(this._alias),
      proxy: cdktn.listMapper(tlsProviderProxyToTerraform, true)(this._proxy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktn.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktn.listMapperHcl(tlsProviderProxyToHclTerraform, true)(this._proxy),
        isBlock: true,
        type: "list",
        storageClassType: "TlsProviderProxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
