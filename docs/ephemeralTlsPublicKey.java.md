# `ephemeralTlsPublicKey` Submodule <a name="`ephemeralTlsPublicKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPublicKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPublicKey <a name="EphemeralTlsPublicKey" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key tls_public_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_public_key.EphemeralTlsPublicKey;

EphemeralTlsPublicKey.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .privateKeyOpenssh(java.lang.String)
//  .privateKeyPem(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyOpenssh">privateKeyOpenssh</a></code> | <code>java.lang.String</code> | The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `privateKeyOpenssh`<sup>Optional</sup> <a name="privateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyOpenssh"></a>

- *Type:* java.lang.String

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key#private_key_openssh EphemeralTlsPublicKey#private_key_openssh}

---

##### `privateKeyPem`<sup>Optional</sup> <a name="privateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.Initializer.parameter.privateKeyPem"></a>

- *Type:* java.lang.String

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key#private_key_pem EphemeralTlsPublicKey#private_key_pem}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyOpenssh">resetPrivateKeyOpenssh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyPem">resetPrivateKeyPem</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetPrivateKeyOpenssh` <a name="resetPrivateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyOpenssh"></a>

```java
public void resetPrivateKeyOpenssh()
```

##### `resetPrivateKeyPem` <a name="resetPrivateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.resetPrivateKeyPem"></a>

```java
public void resetPrivateKeyPem()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_public_key.EphemeralTlsPublicKey;

EphemeralTlsPublicKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_public_key.EphemeralTlsPublicKey;

EphemeralTlsPublicKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_public_key.EphemeralTlsPublicKey;

EphemeralTlsPublicKey.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5">publicKeyFingerprintMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256">publicKeyFingerprintSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh">publicKeyOpenssh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem">publicKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput">privateKeyOpensshInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput">privateKeyPemInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh">privateKeyOpenssh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprintMd5`<sup>Required</sup> <a name="publicKeyFingerprintMd5" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintMd5"></a>

```java
public java.lang.String getPublicKeyFingerprintMd5();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprintSha256`<sup>Required</sup> <a name="publicKeyFingerprintSha256" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyFingerprintSha256"></a>

```java
public java.lang.String getPublicKeyFingerprintSha256();
```

- *Type:* java.lang.String

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="publicKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyOpenssh"></a>

```java
public java.lang.String getPublicKeyOpenssh();
```

- *Type:* java.lang.String

---

##### `publicKeyPem`<sup>Required</sup> <a name="publicKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.publicKeyPem"></a>

```java
public java.lang.String getPublicKeyPem();
```

- *Type:* java.lang.String

---

##### `privateKeyOpensshInput`<sup>Optional</sup> <a name="privateKeyOpensshInput" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpensshInput"></a>

```java
public java.lang.String getPrivateKeyOpensshInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPemInput`<sup>Optional</sup> <a name="privateKeyPemInput" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPemInput"></a>

```java
public java.lang.String getPrivateKeyPemInput();
```

- *Type:* java.lang.String

---

##### `privateKeyOpenssh`<sup>Required</sup> <a name="privateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyOpenssh"></a>

```java
public java.lang.String getPrivateKeyOpenssh();
```

- *Type:* java.lang.String

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPublicKeyConfig <a name="EphemeralTlsPublicKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_public_key.EphemeralTlsPublicKeyConfig;

EphemeralTlsPublicKeyConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .privateKeyOpenssh(java.lang.String)
//  .privateKeyPem(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh">privateKeyOpenssh</a></code> | <code>java.lang.String</code> | The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `privateKeyOpenssh`<sup>Optional</sup> <a name="privateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyOpenssh"></a>

```java
public java.lang.String getPrivateKeyOpenssh();
```

- *Type:* java.lang.String

The private key (in  [OpenSSH PEM (RFC 4716)](https://datatracker.ietf.org/doc/html/rfc4716) format) to extract the public key from. This is _mutually exclusive_ with `private_key_pem`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key#private_key_openssh EphemeralTlsPublicKey#private_key_openssh}

---

##### `privateKeyPem`<sup>Optional</sup> <a name="privateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPublicKey.EphemeralTlsPublicKeyConfig.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

The private key (in [PEM (RFC 1421)](https://datatracker.ietf.org/doc/html/rfc1421) format) to extract the public key from. This is _mutually exclusive_ with `private_key_openssh`. Currently-supported algorithms for keys are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.3.0/docs/ephemeral-resources/public_key#private_key_pem EphemeralTlsPublicKey#private_key_pem}

---



