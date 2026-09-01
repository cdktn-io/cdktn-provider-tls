# `ephemeralTlsPrivateKey` Submodule <a name="`ephemeralTlsPrivateKey` Submodule" id="@cdktn/provider-tls.ephemeralTlsPrivateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralTlsPrivateKey <a name="EphemeralTlsPrivateKey" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key tls_private_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_private_key.EphemeralTlsPrivateKey;

EphemeralTlsPrivateKey.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .algorithm(java.lang.String)
//  .ecdsaCurve(java.lang.String)
//  .rsaBits(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.ecdsaCurve">ecdsaCurve</a></code> | <code>java.lang.String</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.rsaBits">rsaBits</a></code> | <code>java.lang.Number</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.algorithm"></a>

- *Type:* java.lang.String

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#algorithm EphemeralTlsPrivateKey#algorithm}

---

##### `ecdsaCurve`<sup>Optional</sup> <a name="ecdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.ecdsaCurve"></a>

- *Type:* java.lang.String

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#ecdsa_curve EphemeralTlsPrivateKey#ecdsa_curve}

---

##### `rsaBits`<sup>Optional</sup> <a name="rsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.Initializer.parameter.rsaBits"></a>

- *Type:* java.lang.Number

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#rsa_bits EphemeralTlsPrivateKey#rsa_bits}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetEcdsaCurve` <a name="resetEcdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetEcdsaCurve"></a>

```java
public void resetEcdsaCurve()
```

##### `resetRsaBits` <a name="resetRsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.resetRsaBits"></a>

```java
public void resetRsaBits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isConstruct"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_private_key.EphemeralTlsPrivateKey;

EphemeralTlsPrivateKey.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_private_key.EphemeralTlsPrivateKey;

EphemeralTlsPrivateKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_private_key.EphemeralTlsPrivateKey;

EphemeralTlsPrivateKey.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh">privateKeyOpenssh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8">privateKeyPemPkcs8</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5">publicKeyFingerprintMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256">publicKeyFingerprintSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh">publicKeyOpenssh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem">publicKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput">ecdsaCurveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput">rsaBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve">ecdsaCurve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits">rsaBits</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `privateKeyOpenssh`<sup>Required</sup> <a name="privateKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyOpenssh"></a>

```java
public java.lang.String getPrivateKeyOpenssh();
```

- *Type:* java.lang.String

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `privateKeyPemPkcs8`<sup>Required</sup> <a name="privateKeyPemPkcs8" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.privateKeyPemPkcs8"></a>

```java
public java.lang.String getPrivateKeyPemPkcs8();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprintMd5`<sup>Required</sup> <a name="publicKeyFingerprintMd5" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintMd5"></a>

```java
public java.lang.String getPublicKeyFingerprintMd5();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprintSha256`<sup>Required</sup> <a name="publicKeyFingerprintSha256" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyFingerprintSha256"></a>

```java
public java.lang.String getPublicKeyFingerprintSha256();
```

- *Type:* java.lang.String

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="publicKeyOpenssh" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyOpenssh"></a>

```java
public java.lang.String getPublicKeyOpenssh();
```

- *Type:* java.lang.String

---

##### `publicKeyPem`<sup>Required</sup> <a name="publicKeyPem" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.publicKeyPem"></a>

```java
public java.lang.String getPublicKeyPem();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `ecdsaCurveInput`<sup>Optional</sup> <a name="ecdsaCurveInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurveInput"></a>

```java
public java.lang.String getEcdsaCurveInput();
```

- *Type:* java.lang.String

---

##### `rsaBitsInput`<sup>Optional</sup> <a name="rsaBitsInput" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBitsInput"></a>

```java
public java.lang.Number getRsaBitsInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `ecdsaCurve`<sup>Required</sup> <a name="ecdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.ecdsaCurve"></a>

```java
public java.lang.String getEcdsaCurve();
```

- *Type:* java.lang.String

---

##### `rsaBits`<sup>Required</sup> <a name="rsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.rsaBits"></a>

```java
public java.lang.Number getRsaBits();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralTlsPrivateKeyConfig <a name="EphemeralTlsPrivateKeyConfig" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.tls.ephemeral_tls_private_key.EphemeralTlsPrivateKeyConfig;

EphemeralTlsPrivateKeyConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .algorithm(java.lang.String)
//  .ecdsaCurve(java.lang.String)
//  .rsaBits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve">ecdsaCurve</a></code> | <code>java.lang.String</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits">rsaBits</a></code> | <code>java.lang.Number</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#algorithm EphemeralTlsPrivateKey#algorithm}

---

##### `ecdsaCurve`<sup>Optional</sup> <a name="ecdsaCurve" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.ecdsaCurve"></a>

```java
public java.lang.String getEcdsaCurve();
```

- *Type:* java.lang.String

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#ecdsa_curve EphemeralTlsPrivateKey#ecdsa_curve}

---

##### `rsaBits`<sup>Optional</sup> <a name="rsaBits" id="@cdktn/provider-tls.ephemeralTlsPrivateKey.EphemeralTlsPrivateKeyConfig.property.rsaBits"></a>

```java
public java.lang.Number getRsaBits();
```

- *Type:* java.lang.Number

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.4.0/docs/ephemeral-resources/private_key#rsa_bits EphemeralTlsPrivateKey#rsa_bits}

---



