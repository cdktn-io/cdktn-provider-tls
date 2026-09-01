# `ephemeralTlsPrivateKey` Submodule <a name="`ephemeralTlsPrivateKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPrivateKey <a name="EphemeralTlsPrivateKey" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key tls_private_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer"></a>

```typescript
import { ephemeralTlsPrivateKey } from '@cdktn/provider-tls'

new ephemeralTlsPrivateKey.EphemeralTlsPrivateKey(scope: Construct, id: string, config: EphemeralTlsPrivateKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig">EphemeralTlsPrivateKeyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig">EphemeralTlsPrivateKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve">resetEcdsaCurve</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits">resetRsaBits</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEcdsaCurve` <a name="resetEcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve"></a>

```typescript
public resetEcdsaCurve(): void
```

##### `resetRsaBits` <a name="resetRsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits"></a>

```typescript
public resetRsaBits(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct"></a>

```typescript
import { ephemeralTlsPrivateKey } from '@cdktn/provider-tls'

ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement"></a>

```typescript
import { ephemeralTlsPrivateKey } from '@cdktn/provider-tls'

ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralTlsPrivateKey } from '@cdktn/provider-tls'

ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh">privateKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem">privateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8">privateKeyPemPkcs8</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5">publicKeyFingerprintMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256">publicKeyFingerprintSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh">publicKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem">publicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput">ecdsaCurveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput">rsaBitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve">ecdsaCurve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits">rsaBits</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `privateKeyOpenssh`<sup>Required</sup> <a name="privateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh"></a>

```typescript
public readonly privateKeyOpenssh: string;
```

- *Type:* string

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem"></a>

```typescript
public readonly privateKeyPem: string;
```

- *Type:* string

---

##### `privateKeyPemPkcs8`<sup>Required</sup> <a name="privateKeyPemPkcs8" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8"></a>

```typescript
public readonly privateKeyPemPkcs8: string;
```

- *Type:* string

---

##### `publicKeyFingerprintMd5`<sup>Required</sup> <a name="publicKeyFingerprintMd5" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5"></a>

```typescript
public readonly publicKeyFingerprintMd5: string;
```

- *Type:* string

---

##### `publicKeyFingerprintSha256`<sup>Required</sup> <a name="publicKeyFingerprintSha256" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256"></a>

```typescript
public readonly publicKeyFingerprintSha256: string;
```

- *Type:* string

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="publicKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh"></a>

```typescript
public readonly publicKeyOpenssh: string;
```

- *Type:* string

---

##### `publicKeyPem`<sup>Required</sup> <a name="publicKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem"></a>

```typescript
public readonly publicKeyPem: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `ecdsaCurveInput`<sup>Optional</sup> <a name="ecdsaCurveInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput"></a>

```typescript
public readonly ecdsaCurveInput: string;
```

- *Type:* string

---

##### `rsaBitsInput`<sup>Optional</sup> <a name="rsaBitsInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput"></a>

```typescript
public readonly rsaBitsInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `ecdsaCurve`<sup>Required</sup> <a name="ecdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve"></a>

```typescript
public readonly ecdsaCurve: string;
```

- *Type:* string

---

##### `rsaBits`<sup>Required</sup> <a name="rsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits"></a>

```typescript
public readonly rsaBits: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPrivateKeyConfig <a name="EphemeralTlsPrivateKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.Initializer"></a>

```typescript
import { ephemeralTlsPrivateKey } from '@cdktn/provider-tls'

const ephemeralTlsPrivateKeyConfig: ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm">algorithm</a></code> | <code>string</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve">ecdsaCurve</a></code> | <code>string</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits">rsaBits</a></code> | <code>number</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#algorithm EphemeralTlsPrivateKey#algorithm}

---

##### `ecdsaCurve`<sup>Optional</sup> <a name="ecdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve"></a>

```typescript
public readonly ecdsaCurve: string;
```

- *Type:* string

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#ecdsa_curve EphemeralTlsPrivateKey#ecdsa_curve}

---

##### `rsaBits`<sup>Optional</sup> <a name="rsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits"></a>

```typescript
public readonly rsaBits: number;
```

- *Type:* number

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#rsa_bits EphemeralTlsPrivateKey#rsa_bits}

---



