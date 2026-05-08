# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-tls.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TlsProvider <a name="TlsProvider" id="@cdktn/provider-tls.provider.TlsProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs tls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.provider.TlsProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new TlsProvider(Construct Scope, string Id, TlsProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-tls.provider.TlsProviderConfig">TlsProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-tls.provider.TlsProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-tls.provider.TlsProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-tls.provider.TlsProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-tls.provider.TlsProviderConfig">TlsProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.resetProxy">ResetProxy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-tls.provider.TlsProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-tls.provider.TlsProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-tls.provider.TlsProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-tls.provider.TlsProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-tls.provider.TlsProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-tls.provider.TlsProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-tls.provider.TlsProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-tls.provider.TlsProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-tls.provider.TlsProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-tls.provider.TlsProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-tls.provider.TlsProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-tls.provider.TlsProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-tls.provider.TlsProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktn/provider-tls.provider.TlsProvider.resetProxy"></a>

```csharp
private void ResetProxy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a TlsProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-tls.provider.TlsProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Tls;

TlsProvider.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.provider.TlsProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-tls.provider.TlsProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Tls;

TlsProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.provider.TlsProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-tls.provider.TlsProvider.isTerraformProvider"></a>

```csharp
using Io.Cdktn.Providers.Tls;

TlsProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-tls.provider.TlsProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-tls.provider.TlsProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Tls;

TlsProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a TlsProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TlsProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TlsProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-tls.provider.TlsProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the TlsProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.proxyInput">ProxyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.proxy">Proxy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-tls.provider.TlsProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-tls.provider.TlsProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-tls.provider.TlsProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-tls.provider.TlsProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-tls.provider.TlsProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-tls.provider.TlsProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-tls.provider.TlsProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-tls.provider.TlsProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-tls.provider.TlsProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-tls.provider.TlsProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktn/provider-tls.provider.TlsProvider.property.proxyInput"></a>

```csharp
public IResolvable|TlsProviderProxy[] ProxyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktn/provider-tls.provider.TlsProvider.property.proxy"></a>

```csharp
public IResolvable|TlsProviderProxy[] Proxy { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.provider.TlsProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-tls.provider.TlsProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TlsProviderConfig <a name="TlsProviderConfig" id="@cdktn/provider-tls.provider.TlsProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.provider.TlsProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new TlsProviderConfig {
    string Alias = null,
    IResolvable|TlsProviderProxy[] Proxy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.provider.TlsProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProviderConfig.property.proxy">Proxy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]</code> | proxy block. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-tls.provider.TlsProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#alias TlsProvider#alias}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktn/provider-tls.provider.TlsProviderConfig.property.proxy"></a>

```csharp
public IResolvable|TlsProviderProxy[] Proxy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-tls.provider.TlsProviderProxy">TlsProviderProxy</a>[]

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#proxy TlsProvider#proxy}

---

### TlsProviderProxy <a name="TlsProviderProxy" id="@cdktn/provider-tls.provider.TlsProviderProxy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.provider.TlsProviderProxy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Tls;

new TlsProviderProxy {
    bool|IResolvable FromEnv = null,
    string Password = null,
    string Url = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.provider.TlsProviderProxy.property.fromEnv">FromEnv</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When `true` the provider will discover the proxy configuration from environment variables. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProviderProxy.property.password">Password</a></code> | <code>string</code> | Password used for Basic authentication against the Proxy. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProviderProxy.property.url">Url</a></code> | <code>string</code> | URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`. |
| <code><a href="#@cdktn/provider-tls.provider.TlsProviderProxy.property.username">Username</a></code> | <code>string</code> | Username (or Token) used for Basic authentication against the Proxy. |

---

##### `FromEnv`<sup>Optional</sup> <a name="FromEnv" id="@cdktn/provider-tls.provider.TlsProviderProxy.property.fromEnv"></a>

```csharp
public bool|IResolvable FromEnv { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When `true` the provider will discover the proxy configuration from environment variables.

This is based upon [`http.ProxyFromEnvironment`](https://pkg.go.dev/net/http#ProxyFromEnvironment) and it supports the same environment variables (default: `true`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#from_env TlsProvider#from_env}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-tls.provider.TlsProviderProxy.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#password TlsProvider#password}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-tls.provider.TlsProviderProxy.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL used to connect to the Proxy. Accepted schemes are: `http`, `https`, `socks5`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#url TlsProvider#url}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-tls.provider.TlsProviderProxy.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username (or Token) used for Basic authentication against the Proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.2.1/docs#username TlsProvider#username}

---



